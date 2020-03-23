<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="login"
    tabindex="-1"
    role="dialog"
    aria-labelledby="login"
    aria-hidden="false"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="tutorLogin">Tutor Login</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="false">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Email:</label>
            <input type="text" class="form-control" v-model="email" />
          </div>
          <div class="form-group">
            <label>Password:</label>
            <input
              class="form-control"
              type="password"
              v-model="password"
              placeholder="Enter Password"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button
            type="button"
            class="btn btn-primary"
            v-on:click="submit()"
            data-dismiss="modal"
          >Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: () => {
    submit: () => {
      var params = {
        auth: { email: this.email, password: this.password }
      };
      console.log(params);
    };
  }
};
</script>