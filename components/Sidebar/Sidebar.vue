<template>
    <aside class="sidebar">
        <LogoSvg class="sidebar__logo"/>
        <p class="sidebar__description">
            How much fun <br>do you want in your life?
        </p>
        <NuxtLink
            :to="`mailto:${MAIN_EMAIL}`"
            class="sidebar__main-email"
        >
            {{ MAIN_EMAIL }}
        </NuxtLink>

        <HappinessPercentage class="sidebar__fun-progress" />

        <div class="sidebar-information sidebar__information">
            <p class="sidebar-information__text">
                {{ COMPANY_NAME }}<br>
                {{ COMPANY_ADDRESS }}
            </p>
            <NuxtLink
                :to="`mailto:${CONTACTS_EMAIL}`"
                class="sidebar-information__text sidebar-information__text_is-link"
            >
                {{ CONTACTS_EMAIL }}
            </NuxtLink>
            <NuxtLink
                :to="PRIVACY_POLICY_LINK"
                target="_blank"
                class="sidebar-information__text sidebar-information__text_is-link"
            >
                Privace Policy
            </NuxtLink>
        </div>
    </aside>
</template>

<script lang="ts" setup>
import HappinessPercentage from '~/components/HappinessPercentage/HappinessPercentage.vue';
import LogoSvg from '~/public/svg/logo.svg?skipsvgo';
import {MAIN_EMAIL, CONTACTS_EMAIL, PRIVACY_POLICY_LINK, COMPANY_NAME, COMPANY_ADDRESS} from '~/constants/contacts';
</script>


<style lang="scss" src="~/components/Sidebar/styles.scss"/>
