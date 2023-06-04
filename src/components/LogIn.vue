<template>
  <div class="container-fluid">
      <img src="../assets/movie.jpeg" width="150" height="150" />
      <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
              <div class="card-body">
                  <div class="row justify-content-center">
                      <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                          <p class="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-2">Log In</p>

                          <form class="mx-1 mx-md-4"  @submit.prevent="submitForm">
                              <div class="d-flex flex-row align-items-center">
                                  <i class="fas fa-envelope fa-lg fa-fw"></i>
                                  <div class="form-outline flex-fill mb-1">
                                      <label class="form-label" for="form3Example3c">Email-Id</label>
                                      <input type="email" id="form3Example3c" class="form-control"
                                          placeholder="Enter Email Id" v-model="emailid" />
                                  </div>
                              </div>

                              <div class="d-flex flex-row align-items-center">
                                  <i class="fas fa-lock fa-lg fa-fw"></i>
                                  <div class="form-outline flex-fill mb-1">
                                      <label class="form-label" for="form3Example4c">Password</label>
                                      <input type="password" id="form3Example4c" class="form-control"
                                          placeholder="Enter Password" v-model="password" />
                                  </div>
                              </div>
                              <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4 mt-4">
                                  <button type="submit" class="btn btn-outline-success btn-large">Login</button>
                              </div>

                          </form>

                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'LogIn',
  data() {
      return{
          emailid:'',
          password:''
      }
  },
  methods: {
      submitForm(){
        console.log(this.emailid," this ",this.password);
      }
  }
}
</script>