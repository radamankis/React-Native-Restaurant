import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { Image, Button, SocialIcon, Divider } from 'react-native-elements';
import Toast, { DURATION } from 'react-native-easy-toast';

//importamos la libreria tcomb para formulario
import t from 'tcomb-form-native';
const Form = t.form.Form;
import { LoginStruct, LoginOptions } from '../../forms/Login'; //se importa la estructura y las opciones
//Importamos la libreria firebase
import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook';
import { facebookApi } from '../../utils/Social';

export default class Login extends Component {
	//se carga la estructura del Formulario al State

	constructor() {
		super();

		this.state = {
			loginStruct: LoginStruct,
			loginOptions: LoginOptions,
			loginData: {
				email: '',
				password: ''
			},
			loginErrorMessage: ''
		};
	}

	login = () => {
		const validate = this.refs.loginForm.getValue();

		if (!validate) {
			this.refs.toastLogin.show('Formulario incorrecto', 2000);
		} else {
			firebase
				.auth()
				.signInWithEmailAndPassword(validate.email, validate.password)
				.then(() => {
					this.refs.toastLogin.show('Logeando....', 2000, () => {
						this.props.navigation.goBack();
					});
				})
				.catch((error) => {
					const errorCode = error.code;
					if (errorCode === 'auth/wrong-password') {
						this.refs.toastLogin.show('Contraseña incorrecta', 2000);
					}
					if (errorCode === 'auth/user-not-found') {
						this.refs.toastLogin.show('Usuario no encontrado', 2000);
					}
				});
		}
	};

	loginFacebook = async () => {
			const { type, token , expires, permissions,	declinedPermissions} =  await Facebook.logInWithReadPermissionsAsync(facebookApi.aplication_id, {
				permissions: facebookApi.permissions,
		  	});
			if(type === 'success'){
				const credentials = firebase.auth.FacebookAuthProvider.credential(token);
				firebase
				.auth()
				.singInWithCredential(credentials)
				.then( ()=> {
					this.refs.toastLogin.show("Login Correcto", 100, ()=>{
						this.props.navigation.goBack()
					});
				})
				.catch(err => {
					this.refs.toastLogin.show("Error accediendo con facebook, intentelo mas tarde", 300)
				})
			} else if( type=== 'cancel'){
				this.refs.toastLogin.show("Inicio de Sesion Cancelado", 300)
			}else{
				this.refs.toastLogin.show("Error Desconocido", 300)
		}
	};

	onChangeFormLogin = (formValue) => {
		this.setState({
			loginData: formValue
		});
	};

	render() {
		//destructurando el objeto del state, para usarlo desde el render
		const { loginStruct, loginOptions, loginErrorMessage } = this.state;
		return (
			<View style={styles.viewBody}>
				<Image
					source={require('../../../assets/img/restaurant1.png')}
					containerStyle={styles.containerLogo}
					style={styles.logo}
					PlaceholderContent={<ActivityIndicator />}
					resizeMode="contain"
				/>
				<View style={styles.viewForm}>
					{/* value captura los datos del state loginData
                					  	con el prop onChange capturo los datos del formulario y los envio al state*/}
					<Form
						ref="loginForm"
						type={loginStruct}
						options={loginOptions}
						value={this.state.loginData}
						onChange={(formValue) => this.onChangeFormLogin(formValue)}
					/>
					<Button buttonStyle={styles.buttonLoginContainer} title="Login" onPress={() => this.login()} />

					<Divider style={styles.divider} />
					<SocialIcon
						title="Iniciar sesión con Facebook"
						button
						type="facebook"
						onPress={() => this.loginFacebook()}
					/>
				</View>
				<Toast
					ref="toastLogin"
					position="bottom"
					positionValue={245}
					fadeInDuration={500}
					fadeOutDuration={1000}
					opacity={0.8}
					textStyle={{
						color: '#fff'
					}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	viewBody: {
		flex: 1,
		marginTop: 40,
		marginLeft: 40,
		marginRight: 40
	},
	containerLogo: {
		alignItems: 'center',
		marginLeft: 40
	},
	logo: {
		width: 200,
		height: 150
	},
	viewForm: {
		marginTop: 50
	},
	buttonLoginContainer: {
		backgroundColor: '#00a680',
		marginTop: 20,
		marginLeft: 10,
		marginRight: 10
	},
	divider: {
		backgroundColor: '#00a680',
		marginBottom: 20
	}
});
