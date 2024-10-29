<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <p class="footer__text">
                    {{ COMPANY_NAME }}<br>
                    {{ COMPANY_ADDRESS }}
                </p>
                <NuxtLink
                    :to="`mailto:${CONTACTS_EMAIL}`"
                    class="footer__text footer__text_is-link"
                >
                    {{ CONTACTS_EMAIL }}
                </NuxtLink>
                <NuxtLink
                    :to="PRIVACY_POLICY_LINK"
                    target="_blank"
                    class="footer__text footer__text_is-link"
                >
                    Privace Policy
                </NuxtLink>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import {MAIN_EMAIL, CONTACTS_EMAIL, PRIVACY_POLICY_LINK, COMPANY_NAME, COMPANY_ADDRESS} from '~/constants/contacts';
</script>

<style lang="scss" src="~/components/Footer/styles.scss"/>
