<script>
    import { enhance } from '$app/forms';
    export let form;
    export let data;
</script>

<h1>Register</h1>

<form action="?/register" method="POST" use:enhance>
    <div>
        <label for="username">Username</label>
        <input type="email" name="username" id="username" required/>
    </div>
    <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" required/>
    </div>

    {#if form?.user}
        <div class="error">Username is already in use.</div>
    {/if}

    <button type="submit">Register</button>
</form>

<style></style>

