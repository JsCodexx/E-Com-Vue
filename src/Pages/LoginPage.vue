<template>
  <div class="container-fluid">
    <div class="row" id="login">
      <!-- <div
      <img src="../assets/Images/HomePage/catagories (1).jpg" alt="">
        class="
          col-xs-12 col-md-10 col-md-offset-1 col-lg-2 col-lg-offset-3
          text-center
        "
        id="left"
      >
        <i class="glyphicon glyphicon-road"></i>
        <h2>Memeway</h2>
        <h4>Like highway but way better.</h4>
      </div> -->

      <div
        class="col-xs-12 col-md-10 col-md-offset-1 col-lg-4 col-lg-offset-0"
        id="right"
      >
        <h1 class="text-center">Log In</h1>

        <div id="username">
          <span>Username:</span>
          <input type="text" placeholder="username" v-model="username" />
        </div>

        <div id="password">
          <span>Password:</span>
          <input type="password" placeholder="*********" v-model="password" />
        </div>

        <button @click.prevent="logIn">Log In</button>
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
    };
  },
  methods: {
    async logIn() {
      localStorage.removeItem('token');
      const userData = {
        username: this.username,
        password: this.password,
      };
      console.log(userData);
      await axios
        .post('https://dummyjson.com/auth/login', {
          username: this.username,
          password: this.password,
          // expiresInMins: 60, // optional
        })
        .then((response) => {
          (token = response.data.token), localStorage.setItem('token', token);

          this.$store.commit({
            type: 'Store/setToken',
            value: token,
          });
          localStorage.setItem('token', token);
          this.$router.push('/home');
        })

        .catch((error) => {
          console.log(JSON.stringify(error));
        });
      // this.$store.commit('setToken', token);

      // axios.defaults.headers.common['Authorization'] = 'Token ' + token;
      // console.log(response);

      // axios
      //   .fetch('https://dummyjson.com/auth/login', userData)
      //   .then((response) => {
      //     console.log(response.data);
      // const username = response.data.username;
      // const token = response.data.token;
      // this.$store.commit({
      //   type: 'Login/setToken',
      //   value: token,
      // });
      // this.$store.commit('setToken', token);

      // axios.defaults.headers.common['Authorization'] = 'Token ' + token;
      // console.log(response);
      // localStorage.setItem('token', token);
      // localStorage.setItem('username', username);

      // const toPath = this.$route.query.to || '/home';

      // this.$router.push(toPath);
      // })
      // .catch((error) => {
      // console.log(JSON.stringify(error));
      // });
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,700,600);

@media (max-width: 991px) {
  #login {
    margin: 0px;
    main-height: 100vh;
    justify-content: center;
  }

  #left {
    padding: 25px;
    box-shadow: -0px -7px 15px #c14c2c inset;
    min-height: 10vh;
  }

  #right {
    padding: 50px;
    min-height: 90vh;
  }

  button {
    width: 80%;
  }

  h1 {
    margin-top: -20px !important;
  }
}

@media (min-width: 991px) and (max-width: 1200px) {
  #left {
    padding: 50px;
    box-shadow: -0px -7px 15px #c14c2c inset;
  }

  #right {
    padding: 50px;
  }

  #login {
    margin: 0px;
    margin-top: 75px;
    margin-bottom: 75px;
    justify-content: center;
  }

  #username,
  #password {
    width: 80%;
    margin: auto;
  }

  button {
    width: 70%;
  }

  h1 {
    margin-top: -20px !important;
  }
}

@media (min-width: 1200px) {
  #left {
    box-shadow: -6px -0px 10px #af4528 inset;
    margin-top: 10px;
    height: 480px;
  }

  #right {
    height: 500px;
  }

  #login {
    margin: 0px;
    margin-top: 15vh;
    margin-bottom: 100px;
    justify-content: center;
  }

  i {
    margin-top: 200px;
  }

  #username,
  #password {
    width: 80%;
    margin: auto;
  }

  button {
    width: 60%;
  }

  h1 {
    margin-top: 30px !important;
  }
}

.container-fluid {
  marign: 0px;
  padding: 0px;
  justify-content: center;
}

.row {
  marign: 0px;
  padding: 0px;
  justify-content: center;
}

#left {
  background-color: #e55934;
}

#right {
  background-color: #fff;
}

i {
  margin: 0xp;
  padding: 0px;
  font-size: 1.75em;
  color: #fff;
}

h1 {
  margin: 0xp;
  padding: 0px;
  margin-bottom: 20px;
  color: #3a3331;
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  font-size: 2.25em;
}

h2 {
  margin: 0xp;
  padding: 0px;
  margin-top: 0px !important;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 2.25em;
}

h4 {
  margin-top: 0px !important;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.9em;
  color: #35150c;
  font-weight: 300;
}

#username span,
#password span,
button {
  display: block;
}

#username input,
#password input {
  width: 100%;
}

button {
  margin: auto;
}

#username span,
#password span {
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  padding: 5px;
  margin-top: 20px;
}

#username input,
#password input {
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  padding: 12px;
  border-radius: 0px;
  border: none;
  border-bottom: 3px solid #d8d8d8;
  font-size: 1.25em;
}

#username input:focus,
#password input:focus {
  outline: none;
  color: #e55934;
  border-bottom: 3px solid #e55934;
}

button {
  padding: 10px;
  margin-top: 50px;
  background-color: #fff;
  border: none;
  border: 2px solid #e55934;
  font-family: 'Open Sans', sans-serif;
  border-radius: 5px;
  color: #c14c2c;
}

button:hover {
  color: #fff;
  background-color: #e55934;
  border: 2px solid #c14c2c;
  border-radius: 5px;
}

button:focus {
  outline: none;
}

#acct {
  margin-top: 30px;
  color: #c14c2c;
}

#signup-button {
  color: #fff;
  background-color: #e55934;
  border: 2px solid #c14c2c;
  border-radius: 5px;
  margin-top: 10px;
}

#signup-button:hover {
  color: #e55934;
  background-color: #fff;
  border: 2px solid #e55934;
  border-radius: 5px;
}
</style>