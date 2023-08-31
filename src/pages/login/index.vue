<script setup lang="ts">
import type { FormInst, FormRules } from 'naive-ui'
defineOptions({
  name: 'Login',
})
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
function login(formEl: FormInst | undefined) {
  formEl?.validate((error) => {
    if (!error)
      router.push('/')
  })
}

const { toggleTheme } = useSettingStore()
</script>

<template>
  <div h-full bg="#fff dark:#222">
    <div relative h-full flex items-center justify-center>
      <div absolute right-3 top-3 h-48px w-48px text-center text-8>
        <i inline-block cursor-pointer align-middle i="carbon-sun dark:carbon-moon" @click="toggleTheme()" />
      </div>
      <div class="w-100 border p-10" bg="dark:#1818c" border-rounded-4>
        <div text="8 #1890ff center">
          后台管理系统
        </div>
        <div py-10>
          <n-form
            ref="loginFormRef"
            :model="loginForm"
            :rules="loginFormRules"
            label-width="80px"
            label-position="top"
            size="large"
          >
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

