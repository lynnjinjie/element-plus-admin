<script setup lang='ts'>
import type { FormInstance, FormRules } from 'element-plus'

const router = useRouter()
const loginForm = reactive({
  username: '',
  password: '',
})
const loginFormRef = ref<FormInstance>()
const loginFormRules = reactive<FormRules>({
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
  ],
})
const login = async (formEl: FormInstance | undefined) => {
  if (!formEl)
    return
  await formEl.validate((valid) => {
    if (valid)
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
          <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="80px" label-position="top" size="large">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="loginForm.username" placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="loginForm.password" placeholder="请输入密码" />
            </el-form-item>
            <el-form-item>
              <el-button w-full type="primary" @click="login(loginFormRef)">
                登录
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

