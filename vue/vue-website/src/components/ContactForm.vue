<template>
  <div
    v-if="showContact === true"
    class="form-container d-flex justify-content-center align-items-center"
  >
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

      <!-- reCAPTCHA -->
      <RecaptchaV2
        @widget-id="handleWidgetId"
        @error-callback="handleErrorCalback"
        @expired-callback="handleExpiredCallback"
        @load-callback="handleLoadCallback"
      />

      <!-- Submit button -->
      <MDBBtn block class="mt-4 mb-4" type="submit"> Send </MDBBtn>
    </form>
  </div>
  <div v-else class="d-flex justify-content-center align-items-center flex-column text-center p-3">
    <h3>Your message was sent successfully!</h3>
    <p>Thank you for contacting me.<br />I'll get back to you, as soon as I can.</p>
  </div>
</template>

<script setup lang="ts">
import { MDBInput, MDBBtn, MDBTextarea } from 'mdb-vue-ui-kit'
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

import { RecaptchaV2, useRecaptcha } from 'vue3-recaptcha-v2'

let showContact = true
const form4Name = ref('')
const form4Email = ref('')
const form4Subject = ref('')
const form4Textarea = ref('')
const recaptchaWidget = ref()
const recaptchaResponse = ref()

const handleWidgetId = (widgetId: number) => {
  recaptchaWidget.value = widgetId
}
const handleErrorCalback = () => {
  console.log('Error callback')
}
const handleExpiredCallback = () => {
  console.log('Expired callback')
}
const handleLoadCallback = (response: any) => {
  recaptchaResponse.value = response
}

const sendEmail = async () => {
  try {
    // Handles reset of reCAPTCHA
    const { handleReset } = useRecaptcha()

    const templateParams = {
      to_name: 'Juan',
      from_name: form4Name.value,
      from_email: form4Email.value,
      subject: form4Subject.value,
      message: form4Textarea.value,
      'g-recaptcha-response': recaptchaResponse.value
    }

    const response = await emailjs.send(
      'service_gdszpy1',
      'template_czq9b2t',
      templateParams,
      'HijV1CR_uVeS_0V-8'
    )

    console.log('Email sent successfully:', response)

    // Reset form fields after successful submission
    form4Name.value = ''
    form4Email.value = ''
    form4Subject.value = ''
    form4Textarea.value = ''
    handleReset(recaptchaWidget.value)
    showContact = false
  } catch (error) {
    console.error('Error sending email:', error)
    alert('There was an error.\nPlease complete the reCAPTCHA. OR Please refresh the page.')
  }
}
</script>

<style scoped>
.form-container {
  width: 70%;
}

/* .contact-form {
  width: 70%;
} */
.btn {
  --mdb-btn-bg: var(--mdb-primary) !important;
  --mdb-btn-color: white !important;
}
.btn:hover {
  background-color: var(--accent-three);
}

.btn:disabled {
  background-color: var(--mdb-primary);
  opacity: 0.3;
}

@media (min-width: 992px) {
  /* Styling for Image section */
  .form-container {
    width: 25%;
  }

  /* .contact-form {
    width: 25%;
  } */
  /* Styling for Image section */
}
</style>
