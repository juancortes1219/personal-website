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

    <!-- reCAPTCHA -->
    <recaptcha-v2
      ref="recaptcha"
      @verify="onRecaptchaVerify"
      siteKey="6LeCMDwpAAAAAF8FdDfy2TqG2FpOknFueyPp2sNd"
    ></recaptcha-v2>

    <!-- Submit button -->
    <MDBBtn block class="mt-4 mb-4" type="submit"> Send </MDBBtn>
  </form>
</template>

<script setup lang="ts">
import { MDBInput, MDBBtn, MDBTextarea } from 'mdb-vue-ui-kit'
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

import { RecaptchaV2, useRecaptcha } from 'vue3-recaptcha-v2'
// import { RecaptchaV2 } from 'vue3-recaptcha-v2'
// import { useRecaptcha } from 'vue3-recaptcha-v2';

const form4Name = ref('')
const form4Email = ref('')
const form4Subject = ref('')
const form4Textarea = ref('')
const recaptchaRef = ref()

type ResponseData = {
  success: boolean
  challenge_ts: string
  hostname: string
  score: number
  action: string
}

const onRecaptchaVerify = async (response: ResponseData) => {
  try {
    // You can perform additional actions when reCAPTCHA is verified, if needed
    console.log('reCAPTCHA verified:', response)
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error)
  }
}

const sendEmail = async () => {
  try {
    // Verify reCAPTCHA before sending the email
    const recaptchaResponse = await recaptchaRef.value.getResponse()
    if (!recaptchaResponse) {
      console.error('reCAPTCHA verification failed')
      return
    }

    const templateParams = {
      to_name: 'Juan',
      from_name: form4Name.value,
      from_email: form4Email.value,
      subject: form4Subject.value,
      message: form4Textarea.value
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
    recaptchaRef.value.reset()
  } catch (error) {
    console.error('Error sending email:', error)
  }
}
</script>

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
