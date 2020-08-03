import React, { Component } from "react";

export class FormInput extends Component {
	render() {
		const { className, title, type, placeholder, input } = this.props;
		return (
			<div className={`${className} form-input`}>
				<label className="form-input__label">{title}</label>
				<input
					className="form-input__input"
					type={type}
					placeholder={placeholder}
					{...input}
				/>
			</div>
		);
	}
}

export class FormButton extends Component {
	render() {
		const { className, title, type, onClick, input, short } = this.props;
		return (
			<div className={`${className} form-button`}>
				<button
					className={`form-button__button ${
						short ? "form-button__grey" : ""
					}`}
					type={type}
					onClick={onClick}
					{...input}
				>
					{title}
				</button>
			</div>
		);
	}
}

export class LongGreyButton extends Component {
	render() {
		const {
			className,
			buttonName,
			type,
			onClick,
			input,
			title,
		} = this.props;
		return (
			<div className={`${className} form-button-long-grey`}>
				<label className="form-button-long-grey__label">{title}</label>
				<button
					className={`form-button-long-grey__button`}
					type={type}
					onClick={onClick}
					{...input}
				>
					{buttonName}
				</button>
			</div>
		);
	}
}
