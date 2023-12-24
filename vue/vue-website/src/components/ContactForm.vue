<!-- ContactForm.vue -->
<!-- <template>
    <form @submit.prevent="sendEmail" class="contact-form">
      <label for="name">Name:</label>
      <input v-model="name" type="text" id="name" required />
  
      <label for="email">Email:</label>
      <input v-model="email" type="email" id="email" required />
  
      <label for="message">Message:</label>
      <textarea v-model="message" id="message" required></textarea>
  
      <button type="submit">Send Message</button>
    </form>
</template> -->
<template>
    <form class="contact-form" @submit.prevent="sendEmail">
      <!-- Name input -->
      <MDBInput
        type="text"
        label="Name"
        id="form4Name"
        v-model="form4Name"
        wrapperClass="mb-4"
        required
      />
  
      <!-- Email input -->
      <MDBInput
        type="email"
        label="Email address"
        id="form4Email"
        v-model="form4Email"
        wrapperClass="mb-4"
        required
      />

      <!-- Subject input -->
      <MDBInput
        label="Subject"
        id="form4Subject"
        v-model="form4Subject"
        wrapperClass="mb-4"
        required
      />
  
      <!-- Message input -->
      <MDBTextarea
        label="Message"
        id="form4Textarea"
        v-model="form4Textarea"
        wrapperClass="mb-4"
        required
      />
  
      <!-- Submit button -->
      <MDBBtn block class="mb-4" type="submit"> Send </MDBBtn>
    </form>
</template>

<style scoped>
.contact-form {
  width: 70%;
}
.btn {
    --mdb-btn-bg: var(--mdb-primary) !important;
    --mdb-btn-color: white !important;
}
.btn:hover {
    background-color: var(--accent-three);
}

@media (min-width: 992px) {
  /* Styling for Image section */
  .contact-form {
    width: 25%;
  }
  /* Styling for Image section */
}
</style>

<script setup lang="ts">
  import {
    MDBInput,
    MDBBtn,
    MDBTextarea
  } from "mdb-vue-ui-kit";
  import { ref } from "vue";
  import emailjs from '@emailjs/browser';

  const form4Name = ref("");
  const form4Email = ref("");
  const form4Subject = ref("");
  const form4Textarea = ref("");

  const sendEmail = async () => {
    try {
      const templateParams = {
        to_name: 'Juan',
        from_name: form4Name.value,
        from_email: form4Email.value,
        subject: form4Subject.value,
        message: form4Textarea.value,
      };
  
      const response = await emailjs.send(
        'service_gdszpy1',
        'template_czq9b2t',
        templateParams,
        'HijV1CR_uVeS_0V-8'
      );
  
      console.log('Email sent successfully:', response);
      
      // Reset form fields after successful submission
      form4Name.value = '';
      form4Email.value = '';
      form4Subject.value = '';
      form4Textarea.value = '';
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
</script>
  
<!-- <script setup lang="ts">
  import { ref } from 'vue';
  import emailjs from '@emailjs/browser';
  
  const name = ref('');
  const email = ref('');
  const message = ref('');
  
  const sendEmail = async () => {
    try {
      const templateParams = {
        from_name: name.value,
        from_email: email.value,
        to_name: 'Juan',
        message: message.value,
      };
  
      const response = await emailjs.send(
        'service_gdszpy1',
        'template_czq9b2t',
        templateParams,
        'HijV1CR_uVeS_0V-8'
      );
  
      console.log('Email sent successfully:', response);
      
      // Reset form fields after successful submission
      name.value = '';
      email.value = '';
      message.value = '';
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
</script> -->