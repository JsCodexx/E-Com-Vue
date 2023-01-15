<template>
  <div class="wrapper">
    <div class="container">
      <div class="col-md-9 card mx-auto d-flex flex-row px-0">
        <div class="img-left d-md-flex d-none"></div>

        <div class="card-body d-flex flex-column justify-content-center">
          <h4 class="title text-center mt-4 pb-3">Login into accont</h4>
          <form class="col-sm-10 col-12 mx-auto">
            <div class="form-group py-3">
              <input type="text" placeholder="username" v-model="username" />
            </div>
            <div class="form-group py-3 ">
              <input
                type="password"
                placeholder="Password"
                v-model="password"
              />
            </div>
            <div class="">
              <input
                @click.prevent="logIn"
                type="button"
                class="btn btn-outline-dark d-block w-100"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    name: 'login';
    return {
      username: '',
      password: '',
      userData: {},
    };
  },
  methods: {
    async logIn() {
      localStorage.removeItem('token');
      const credentials = {
        username: this.username,
        password: this.password,
      };
      console.log(credentials);
      await axios
        .post('https://dummyjson.com/auth/login', credentials)
        .then((response) => {
     

          console.log('hi i am here');
          localStorage.setItem('token', JSON.stringify(response.data.token));
          localStorage.setItem('user', JSON.stringify(response.data));
        
          console.log('hi i am here');

          this.$store.dispatch('userDetails');

          this.$router.push({ name: 'home' });
       
        })

        .catch((error) => {
          console.log(JSON.stringify(error));
        });
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 45%; */
  background-image:url(../assets/Images/Loginpage/bruno-kelzer-LvySG1hvuzI-unsplash.jpg);
 
  background-size: cover;
}

.card {
  overflow: hidden;
  border-radius: 10px;
  min-height: 500px;
}

.img-left {
  width: 45%;
  background-image:url(../assets/Images/Loginpage/md-salman-tWOz2_EK5EQ-unsplash.jpg);
   
  background-size: cover;
}

.card-body {
  padding: 2rem;
  background-image:url(../assets/Images/Loginpage/bruno-kelzer-LvySG1hvuzI-unsplash.jpg);
}

input[type='email'],
input[type='password'] {
  border-radius: 100px;
  border: none;
  background: #ffffff;
}
input[type='button'] {
  border-radius: 100px;
}
</style>