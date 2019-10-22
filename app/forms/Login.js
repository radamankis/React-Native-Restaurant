import React from 'react';

import t from 'tcomb-form-native';
import formValidation from '../utils/Validation';
import inputTemplate from './templates/Inputs';
//struct de formulario
export const LoginStruct = t.struct({
	email: formValidation.email,
	password: formValidation.password
});
//opciones del formulario
export const LoginOptions = {
	fields: {
		email: {
			template: inputTemplate,
			config: {
				placeholder: 'Escribe tu Email',
				iconType: 'material-community',
				iconName: 'at'
			}
		},
		password: {
			template: inputTemplate,
			config: {
				placeholder: 'Escribe tu Contraseña',
				password: true,
				secureTextEntry: true,
				iconType: 'material-community',
				iconName: 'lock-outline'
			}
		}
	}
};
