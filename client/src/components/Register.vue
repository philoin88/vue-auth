<template>
  <form action="">
    <h3>Sign Up</h3>

    <div class="form-group">
      <label for="">First Name</label>
      <input type="text" class="form-control" placeholder="First Name">
    </div>

    <div class="form-group">
      <label for="">Last Name</label>
      <input type="text" class="form-control" placeholder="Last Name">
    </div>

    <div class="form-group">
      <label for="">Email</label>
      <input type="email" class="form-control" placeholder="Email" />
    </div>


    <div class="form-group">
      <label for="">Password</label>
      <input type="password" class="form-control" placeholder="Password" />
    </div>

    <div class="form-group">
      <label for="">Confirm Password</label>
      <input type="password" class="form-control" placeholder="Confirm Password" />
    </div>

    <button class="btn btn-primary btn-block">Sing Up</button>
  </form>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style>

</style>