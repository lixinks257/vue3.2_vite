<template>
	<div class="login-container">
		<!-- 背景vedio -->
		<video poster="@/assets/login/1.jpg" loop autoplay muted>
			<source src="@/assets/login/Particles.mp4" />
		</video>

		<div class="login-form">
			<!-- 标题 -->
			<header>
				<img src="@/assets/logo.png" />
				<h3>vue3-admin</h3>
			</header>
			<el-form :model="loginForm" :rules="loginRules">
				<el-form-item prop="username">
					<el-icon>
						<user />
					</el-icon>
					<el-input v-model="loginForm.username" placeholder="username" type="text"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-icon>
						<lock />
					</el-icon>
					<el-input v-model="loginForm.password" placeholder="password" type="password"></el-input>
				</el-form-item>
				<el-form-item prop="verifyCode" class="verify-item">
					<el-input
						v-model="loginForm.verifyCode"
						placeholder="verifyCode"
						type="text"
						style="width: 40%; display: inline-block; border: 1px solid rgba(255, 255, 255, 0.1)"
					></el-input>
					<div style="margin-left: 10px; display: inline-block; height: 40px">
						<img :src="codeUrl" style="margin-bottom: -12px; width: 100%; height: 100%; object-fit: cover" @click="getValidaCode" />
					</div>
				</el-form-item>
				<el-form-item style="border: none; background: none">
					<el-button type="primary" style="width: 100%" @click="handleLogin"> 登录 </el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { getCode } from '@/api/Auth'
// import { useRouter } from 'vue-router'
import { useStore } from '@/store'

const store = useStore()
// const router = useRouter()
// 验证码
const codeUrl = ref<string>()
// form表单数据
const loginForm = reactive({
	username: '',
	password: '',
	uuid: '',
	verifyCode: '',
})

// rules表单校验
const loginRules = reactive({
	username: [
		{
			required: true,
			message: '不能为空,请输入username',
			trigger: 'blur',
		},
		{
			pattern: /^[a-zA_Z0-9]{2,10}$/,
			message: '请输入2到10的字母或者数字',
			trigger: 'blur',
		},
		{
			min: 3,
			max: 15,
			message: '请输入3到15的字母或者数字',
			trigger: 'blur',
		},
	],
	password: [
		{
			required: true,
			message: '不能为空,请输入密码',
			trigger: 'blur',
		},
		{
			min: 3,
			max: 15,
			message: '请输入3到15的字母或者数字',
			trigger: 'blur',
		},
	],
	verifyCode: [
		{
			required: true,
			message: '不能为空',
			trigger: 'blur',
		},
		{
			whitespace: true,
			message: '不能为空格',
		},
	],
})

// 获取验证码
const getValidaCode = () => {
	getCode().then((res) => {
		codeUrl.value = res.data.image
		/*  获取uuid */
		loginForm.uuid = res.data.uuid
	})
}

onMounted(() => {
	getValidaCode()
	handleToken()
})
// token登录
const handleToken = () => {
	const token = localStorage.getItem('token')
	if (token != null) {
		store.dispatch('authStore/loginByToken', token)
	}
}

// 登录
const handleLogin = () => {
	store.dispatch('authStore/login', loginForm)
	store.dispatch('menuStore/generateSystemMenus', loginForm)
}
</script>

<style lang="scss">
// 隐藏滚动条
::-webkit-scrollbar {
	width: 0 !important;
}
::-webkit-scrollbar {
	width: 0 !important;
	height: 0;
}
.login-container {
	height: 100%;
	width: 100%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	video {
		position: absolute;
		/* Vertical and Horizontal center*/
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		object-fit: fill;
		z-index: -1;
	}
	.login-form {
		width: 400px;
		height: 380px;
		padding: 4vh;
		margin: 20px;
		background: url('@/assets/login/login_form.png');
		background-size: 100% 100%;
		border-radius: 10px;
		box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.06);
		opacity: '0.2';

		header {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 20px;
			img {
				display: inline-block;
				width: 40px;
			}

			h3 {
				// margin-bottom: 0;
				font-size: 24px;
				color: #fff;
				text-align: center;
			}
		}
		.el-input {
			display: inline-block;
			height: 44px;
			width: 85%;

			input {
				height: 44px;
				background: transparent;
				border: 0px;
				border-radius: 0px;
				padding: 12px 5px 12px 15px;
				color: $lightGray;
				caret-color: $loginCursorColor;
				-webkit-appearance: none;
				margin-left: 10px;

				&:-webkit-autofill {
					box-shadow: 0 0 0px 1000px $loginBg inset !important;
					-webkit-text-fill-color: #fff !important;
				}
			}
		}

		.el-form-item {
			display: flex;
			flex-wrap: nowrap;
			border: 1px solid rgba(255, 255, 255, 0.1);
			background: rgba(0, 0, 0, 0.1);
			border-radius: 5px;
			color: #454545;
			padding-left: 10px;
		}

		.verify-item {
			padding-left: 0%;
			border: none;
			background: none;
		}
	}

	.tips {
		font-size: 14px;
		color: #fff;
		margin-bottom: 10px;

		span {
			&:first-of-type {
				margin-right: 16px;
			}
		}
	}

	.svg-container {
		padding: 6px 5px 6px 15px;
		color: $darkGray;
		vertical-align: middle;
		width: 30px;
		display: inline-block;
	}

	.title-container {
		position: relative;

		.title {
			font-size: 26px;
			color: $lightGray;
			margin: 0px auto 40px auto;
			text-align: center;
			font-weight: bold;
		}

		.set-language {
			color: #fff;
			position: absolute;
			top: 3px;
			font-size: 18px;
			right: 0px;
			cursor: pointer;
		}
	}

	.show-pwd {
		position: absolute;
		right: 10px;
		top: 7px;
		font-size: 16px;
		color: $darkGray;
		cursor: pointer;
		user-select: none;
	}

	.thirdparty-button {
		position: absolute;
		right: 0;
		bottom: 6px;
	}

	@media only screen and (max-width: 470px) {
		.thirdparty-button {
			display: none;
		}
	}
}
</style>
