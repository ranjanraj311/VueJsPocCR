<template>
<nav class="level">
  <div class="level-item has-text-centered">
      <div>
          <p class="heading">Registered Customers</p>
          <p class="title">{{data_customer}} Record Found</p>
          <p></p>
          <p></p>
          <p class="heading">
              <router-link :to="`/customer`">
                  Go To Customer Page
              </router-link>
          </p>
      </div>
  </div>
</nav>
</template>

<script>

export default {
    name:'Home',
    computed:{
      data_customer(){
        return this.$store.state.customers.length;
      }
    }
}
</script>