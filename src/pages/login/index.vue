<script lang="ts">
import type { FormInst, FormRules } from 'naive-ui'
export default {
  name: 'Login',
}
</script>

<script setup lang='ts'>
const router = useRouter()
const loginForm = ref({
  username: '',
  password: '',
})
const loginFormRef = ref<FormInst | null>(null)
// const loginFormRules = reactive<FormRules>({
//   username: [
//     { required: true, message: '用户名不能为空', trigger: 'blur' },
//   ],
//   password: [
//     { required: true, message: '密码不能为空', trigger: 'blur' },
//   ],
// })
const loginFormRules: FormRules = {
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
  ],
}
const login = (formEl: FormInst | undefined) => {
  formEl?.validate((error) => {
    if (!error)
      router.push('/')
  })
}
</script>

<template>
  <div h-full bg="#222">
    <div h-full flex justify-center items-center>
      <div class="bg-#18181c p-10 w-100" border-rounded-4>
        <div text="8 #1890ff center">
          后台管理系统
        </div>
        <div py-10>
          <n-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="80px" label-position="top" size="large">
            <n-form-item label="用户名" path="username">
              <n-input v-model:value="loginForm.username" placeholder="请输入用户名" />
            </n-form-item>
            <n-form-item label="密码" path="password">
              <n-input v-model:value="loginForm.password" placeholder="请输入密码" />
            </n-form-item>
            <n-form-item>
              <n-button w-full type="primary" @click="login(loginFormRef)">
                登录
              </n-button>
            </n-form-item>
          </n-form>
        </div>
      </div>
    </div>
  </div>
</template>

