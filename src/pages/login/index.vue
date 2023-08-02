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
const setting = useSettingStore()
const toggleTheme = () => {
  setting.setDarkMode()
}
</script>

<template>
  <div h-full bg="#fff dark:#222">
    <div h-full flex justify-center items-center relative>
      <div w-48px h-48px text-center text-8 absolute top-3 right-3>
        <i v-if="setting.isDark" inline-block align-middle cursor-pointer i="dark:carbon-moon" @click="toggleTheme" />
        <i v-else inline-block align-middle cursor-pointer i="carbon-sun" @click="toggleTheme" />
      </div>
      <div class="p-10 w-100 border" bg="dark:#1818c" border-rounded-4>
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

