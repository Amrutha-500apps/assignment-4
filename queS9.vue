<template>
    <div>
        <b-form @submit="onSubmit" v-if="show">
        <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="name"
          placeholder="Enter name"
          required
        ></b-form-input>
        </b-form-group>

        <b-form-group
        id="input-group-2"
        label="Email:"
        label-for="input-2"
        >
         <b-form-input
          id="input-2"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="age:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.age"
          type="age"
          placeholder="Enter age"
          required
        ></b-form-input>
         </b-form-group>

        <b-form-group id="input-group-4" label="contactnumber:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.contactnumber"
          type="contactnumber"
          placeholder="Enter contactnumber"
          required
        ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button><br><br>
        </b-form>
        <b-card class="mt-3" header="form data result">
        <pre class="m-0">{{form}}</pre>
        </b-card>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          age:'',
          contactnumber:'',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        document.write(JSON.stringify(this.form))
        this.show=true
      },
      
      }
    }
</script>
