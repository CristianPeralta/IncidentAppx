<template>
  <div id="app">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
      <meta name="description" content="bootstrap admin template">
      <meta name="author" content="">

      <link rel="apple-touch-icon" href="img/apple-touch-icon.png">
      <link rel="shortcut icon" href="img/logo-osis.png">
    </head>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
@import 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700';
@import 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css';
</style>
