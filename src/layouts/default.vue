<template>
  <main>
    <div style="width:105px;height: 100vh;background: #222; color: white; color-scheme: dark;">
      sidebar
    </div>
    <div style="position: absolute; left: 105px; top:0">
      <header>
        this is header
      </header>

      <router-view />
      <footer>
        this is footer
      </footer>
    </div>
  </main>
</template>

<style>

</style>
