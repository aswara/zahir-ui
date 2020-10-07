import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	FormControl,
	OutlinedInput,
	InputAdornment,
	IconButton,
	FormHelperText,
	Icon,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ImportExport from '@material-ui/icons/ImportExport';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NumberFormat from 'react-number-format';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '../Typography';

const borderColor = '#EDEEF1';

export const styles = theme => ({
	label: {
		marginBottom: 8,
		color: theme.palette.colors.n60,
		whiteSpace: 'nowrap',
		textAlign: 'left'
	},
	forInfo: {
		backgroundColor: 'transparent !important',
	},
	outlinedInputForInfo: {
		borderColor: 'transparent !important',
		'&:hover': {
			borderColor: 'transparent !important',
		},
		'&$focused': {
			borderColor: 'transparent !important',
			borderWidth: 1
		},
		'&$disabled': {
			borderColor: 'transparent !important',
			borderWidth: 1
		}
	}
});

const useStyles = makeStyles(styles);

function NumberFormatCustom(props) {
	const {
		percentage,
		minZero,
		inputRef,
		prefix,
		onChange,
		left,
		style,
		decimalSeparator,
		thousandSeparator,
		...other
	} = props;

	return (
		<NumberFormat
			{...other}
			style={{ ...style, textAlign: left ? 'left' : 'right' }}
			getInputRef={inputRef}
			onValueChange={(values) => {
				onChange({
					target: {
						value: percentage && values.value > 100 ? 100
							:
							values.value < 0 && minZero ? (values.value * -1)
								:
								values.value
					}
				});
			}}
			thousandSeparator={thousandSeparator}
			decimalSeparator={decimalSeparator}
			isNumericString={true}
			prefix={prefix + ' '}
		/>
	);
}

NumberFormatCustom.propTypes = {
	inputRef: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	left: PropTypes.bool,
	prefix: PropTypes.string,
	minZero: PropTypes.bool
};

function CardNumberFormat(props) {
	const { inputRef, onChange, style, ...other } = props;
	return (
		<NumberFormat
			{...other}
			style={{ ...style }}
			getInputRef={inputRef}
			onValueChange={(values) => {
				onChange({
					target: {
						value: values.value
					}
				});
			}}
			isNumericString={true}
			format="#### #### #### ####"
		/>
	);
}

CardNumberFormat.propTypes = {
	inputRef: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	left: PropTypes.bool
};

function CardExpFormat(props) {
	const { inputRef, onChange, style, ...other } = props;
	return (
		<NumberFormat
			{...other}
			style={{ ...style }}
			getInputRef={inputRef}
			onValueChange={(values) => {
				onChange({
					target: {
						value: values.value
					}
				});
			}}
			isNumericString={true}
			format="##/##"
		/>
	);
}

CardExpFormat.propTypes = {
	inputRef: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	left: PropTypes.bool
};

function CardCvnFormat(props) {
	const { inputRef, onChange, style, ...other } = props;
	return (
		<NumberFormat
			{...other}
			style={{ ...style }}
			getInputRef={inputRef}
			onValueChange={(values) => {
				onChange({
					target: {
						value: values.value
					}
				});
			}}
			isNumericString={true}
			format="####"
		/>
	);
}

CardCvnFormat.propTypes = {
	inputRef: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	left: PropTypes.bool
};

function SerialNumberFormat(props) {
	const { inputRef, onChange, style, ...other } = props;
	return (
		<NumberFormat
			{...other}
			style={{ ...style }}
			getInputRef={inputRef}
			onValueChange={(values) => {
				onChange({
					target: {
						value: values.value,
						formattedValue: values.formattedValue
					}
				});
			}}
			isNumericString={true}
			mask="_"
			format="###.###-##.########"
		/>
	);
}

SerialNumberFormat.propTypes = {
	inputRef: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	left: PropTypes.bool
};



function InputTextField(props) {
	const {
		value,
		id,
		disabled,
		readOnly,
		autoFocus,
		type,
		onChange,
		placeholder,
		onFocus,
		onBlur,
		decimalSeparator,
		thousandSeparator,
		error,
		warning,
		errorMessage,
		errorMargin,
		formatValue,
		icon,
		onClickIcon,
		prefix,
		sufix,
		label,
		maxLength,
		percentage,
		minZero,
		left,
		right,
		prefixLabel,
		sufixLabel,
		touched,
		name,
		multiline,
		rows,
		rowsMax,
		forDetail,
		forInfo,
		endAdornment,
		noWarning,
		...others
	} = props;
	
	const theme = useTheme();
	const classes = useStyles(theme);

	const [ state, setState ] = useState({ type: props.type });

	const togglePassword = () => {
		if (state.type === 'password') {
			setState({ type: 'text' });
		} else {
			setState({ type: 'password' });
		}
	};


	const inputStyle = {
		textAlign: right ? 'right' : 'left',
		padding: forDetail ? '0px 12px 24px 1px' : '12.5px',
		color: forDetail ? '#394D6F' : 'inherit',
	}

	return (
		<FormControl
			disabled={disabled}
			fullWidth
			className={classes.root}
		>
			{label ? (
				<Typography
					className={classes.label}
					scale="300"
					color="N60"
				>
					{label}
				</Typography>
			) : null}
			<OutlinedInput
				{...others}
				value={value}
				id={id}
				disabled={disabled}
				readOnly={readOnly || forDetail}
				autoFocus={autoFocus}
				type={state.type}
				onChange={onChange}
				placeholder={placeholder}
				onFocus={onFocus}
				onBlur={onBlur}
				classes={{
					root: forInfo || forDetail ? classes.forInfo : '',
					notchedOutline: forInfo || forDetail ?
						classes.outlinedInputForInfo : ''
				}}
				inputProps={{
					decimalSeparator,
					thousandSeparator,
					maxLength,
					minLength: 5,
					prefix,
					percentage,
					minZero,
					left,
					style: inputStyle
				}}
				error={touched && error}
				inputComponent={formatValue === 'price' ? NumberFormatCustom : (formatValue === 'card_number' ? CardNumberFormat : (formatValue === 'card_exp' ? CardExpFormat : (formatValue === 'card_cvn' ? CardCvnFormat : (formatValue === 'serial_number' ? SerialNumberFormat : 'input'))))}
				startAdornment={
					!!icon ? (
						<Icon
							onClick={onClickIcon || null}
							style={
								!onClickIcon ? (
									{ marginRight: 10, color: 'rgba(0, 0, 0, 0.54)', marginTop: -10 }
								) : (
										{ marginRight: 10, color: '#46be8a', marginTop: -10, cursor: 'pointer' }
									)
							}
						>
							{icon}
						</Icon>
					) : prefixLabel ? (
						<IconButton style={{ marginBottom: -3, width: 45, height: 45, marginTop: -10 }} onClick={props.onClickPrefix || null}>
							<Typography inline noWrap style={{ width: 70, position: 'absolute' }} variant="body1">
								{prefixLabel}
							</Typography>
						</IconButton>
					) : type === 'rate' ? (
						<InputAdornment position="start">
							<IconButton
								aria-label="Toggle Button Switch Rate"
								onClick={() => props.onClickPrefix(value)}
							>
								<ImportExport fontSize="small" />
							</IconButton>
						</InputAdornment>
					) : null
				}
				endAdornment={
					endAdornment ? <InputAdornment position="end">{endAdornment}</InputAdornment> :
						type === 'password' ? (
							<InputAdornment position="end">
								<IconButton aria-label="Toggle password  visibility" onClick={togglePassword}>
									{state.type !== 'password' ? (
										<Visibility fontSize="small" />
									) : (
											<VisibilityOff fontSize="small" />
										)}
								</IconButton>
							</InputAdornment>
						) : sufix ? (
							<InputAdornment position="end">
								{props.typeSufixIcon === 'material' ? (
									<IconButton onClick={props.onClickSufix || null}>
										<Icon>{sufix}</Icon>
									</IconButton>
								) : (props.typeSufixIcon === 'label' ? (
									<IconButton style={{ width: 45, marginLeft: -20, marginTop: forDetail ? -40 : 0 }} onClick={props.onClickSufix || null}>
										<Typography variant="body1" color="textPrimary">{sufix}</Typography>
									</IconButton>
								) : (props.typeSufixIcon === 'local' ? (
									<IconButton style={{ width: 45, marginLeft: -20, marginTop: forDetail ? -40 : 0 }} onClick={props.onClickSufix || null}>
										<img alt="icon" src={sufix} />
									</IconButton>
								) : <FontAwesomeIcon style={{ marginLeft: -12, marginRight: 12 }} icon={sufix} size="xs" color="rgba(0, 0, 0, 0.54)" />))}
							</InputAdornment>
						) : touched && !!error && error === 'Please fill out this field.' ? (
							<InputAdornment position="end">
								<span className="text-warning text-warning-input">required</span>
								<Icon color="error" fontSize="small" classes={{ fontSizeSmall: 'icon-warning-input' }}>
									warning
								</Icon>
							</InputAdornment>
						) : sufixLabel ? (
							<Typography
								inline
								style={{ width: 70, textAlign: 'right' }}
								variant="body1"
							>
								{sufixLabel}
							</Typography>
						) : null
				}
				multiline={multiline}
				rows={rows}
				rowsMax={rowsMax}
			/>
			{ (errorMessage || (touched && (!!error || warning))) && !noWarning ?
				<FormHelperText
					style={{
						position: 'absolute',
						bottom: -18,
						whiteSpace: 'nowrap'
					}}
					error={touched && (!!error || warning)}>
					{ name === 'email' ? "Please login with this email" : error || errorMessage }
				</FormHelperText>
				: null}
		</FormControl>
	);
}

export default InputTextField;

InputTextField.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	autoFocus: PropTypes.bool,
	italic: PropTypes.bool,
	left: PropTypes.bool,
	maxLength: PropTypes.number,
	right: PropTypes.bool,
	prefix: PropTypes.string,
	onHandleKeyDown: PropTypes.func,
	minZero: PropTypes.bool,
	onChange: PropTypes.func,
	/**
		* Mixed: single character string or boolean true (true is default to ,)
		*/
	thousandSeparator: PropTypes.string,
	/**
		* Single character string
		*/
	decimalSeparator: PropTypes.string,
  /**
   * Format value.
   * `price` is equivalent to have currency format.
   */
	formatValue: PropTypes.oneOf(['price', 'card_number', 'card_exp', 'card_cvn', 'serial_number', 'input']),
	/**
   * If `true`, will be detail style
   */
	forDetail: PropTypes.bool,
	/**
   * If `true`, will be info style
   */
	forInfo: PropTypes.bool,
};

InputTextField.defaultProps = {
	label: '',
	placeholder: '',
	type: 'text',
	disabled: false,
	readOnly: false,
	autoFocus: false,
	italic: false,
	left: false,
	maxLength: undefined,
	right: false,
	prefix: '',
	onHandleKeyDown: null,
	noMargin: false,
	minZero: false,
	thousandSeparator: ',',
	decimalSeparator: '.'
};
