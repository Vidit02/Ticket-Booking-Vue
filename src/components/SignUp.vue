<template>
    <!-- <img src="../assets/movie.jpeg" width="150" height="150" />
    <h1>Signup</h1>
    <form class="col-4 align-items-center">
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form> -->
    <div class="container-fluid">
        <img src="../assets/movie.jpeg" width="150" height="150" />
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
                <div class="card-body">
                    <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                            <p class="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-2">Sign up</p>

                            <form class="mx-1 mx-md-4"  @submit.prevent="submitForm">

                                <div class="d-flex flex-row align-items-center">
                                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                    <div class="form-outline flex-fill mb-1">
                                        <label class="form-label" for="form3Example1c">First Name</label>
                                        <input type="text" id="form3Example1c" class="form-control"
                                            placeholder="Enter First Name" v-model="firstname"  />
                                    </div>
                                </div>

                                <div class="d-flex flex-row align-items-center">
                                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                    <div class="form-outline flex-fill mb-1">
                                        <label class="form-label" for="form3Example1c">Last Name</label>
                                        <input type="text" id="form3Example1c" class="form-control"
                                            placeholder="Enter Last Name" v-model="lastname" />
                                    </div>
                                </div>

                                <div class="d-flex flex-row align-items-center">
                                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div class="form-outline flex-fill mb-1">
                                        <label class="form-label" for="form3Example3c">Email-Id</label>
                                        <input type="email" id="form3Example3c" class="form-control"
                                            placeholder="Enter Email Id" v-model="emailid" />
                                    </div>
                                </div>

                                <div class="d-flex flex-row align-items-center">
                                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                    <div class="form-outline flex-fill mb-1">
                                        <label class="form-label" for="form3Example4c">Password</label>
                                        <input type="password" id="form3Example4c" class="form-control"
                                            placeholder="Enter Password" v-model="password" />
                                    </div>
                                </div>

                                <div class="d-flex flex-row align-items-center">
                                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                    <div class="form-outline flex-fill mb-1">
                                        <label class="form-label" for="form3Example4cd">Repeat your password</label>
                                        <input type="password" id="form3Example4cd" class="form-control"
                                            placeholder="Enter Password Again" v-model="passwordverify" />
                                    </div>
                                </div>

                                <div class="d-flex flex-row align-items-center">
                                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                    <div class="form-outline flex-fill mb-1">
                                        <label class="form-label" for="form3Example4cd">Mobile Number</label>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1">+91</span>
                                            <input type="text" class="form-control" placeholder="Mobile Number"
                                                aria-label="Username" aria-describedby="basic-addon1" v-model="mobilenum">
                                        </div>
                                    </div>
                                </div>

                                <div class="form-check d-flex justify-content-center mb-2">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                    <label class="form-check-label" for="form2Example3">
                                        I agree all statements in <a href="#!">Terms of service</a>
                                    </label>
                                </div>

                                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <button type="submit" class="btn btn-outline-success btn-large">Register User</button>
                                </div>

                            </form>

                        </div>
                        <!-- <div class="col-md-5 align-items-center order-1 order-lg-2">

                <img src="../assets/movie.jpeg" width="300" 
                  class="img-fluid ml-5 mt-5" alt="Sample image">

              </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SignUp',
    data() {
        return{
            firstname:'',
            lastname:'',
            emailid:'',
            password:'',
            passwordverify:'',
            mobilenum:''
        }
    },
    methods: {
        submitForm(){
            console.log(this.firstname,"  ",this.lastname," ",this.emailid," ",this.password," ",this.passwordverify);
        }
    }
}
</script>