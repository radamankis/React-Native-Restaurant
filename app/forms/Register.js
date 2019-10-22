import React from 'react';

import t from "tcomb-form-native";
import formValidator from '../utils/Validation';
import inputTemplate from './templates/Inputs'

export const RegisterStruct = t.struct({
    name: t.String,
    email: formValidator.email,
    password: formValidator.password,
    passwordConfirmation: formValidator.password
});

export const RegisterOptions = {
    fields: {
        name: {
            template: inputTemplate,
            config: {
                placeholder: "Escribe tu nombre",
                iconType: "material-community",
                iconName: "account-outline"

            }
        },
        email: {
            template: inputTemplate,
            config: {
                placeholder: "Escribe tu email",
                iconType: "material-community",
                iconName: "at"
            }
        },
        password: {
            template: inputTemplate,
            config: {
                placeholder: "Escribe tu contraseña",
                iconType: "material-community",
                iconName: "lock-outline",
                password: true,
                secureTextEntry: true
            }

        },
        passwordConfirmation: {
            template: inputTemplate,
            config: {
                placeholder: "Repite tu contraseña",
                iconType: "material-community",
                iconName: "lock-reset",
                password: true,
                secureTextEntry: true
            }
        }

    }
}