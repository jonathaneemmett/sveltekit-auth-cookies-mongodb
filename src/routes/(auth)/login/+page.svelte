<script>
    import { enhance, applyAction } from '$app/forms';
    import { invalidateAll } from '$app/navigation';
    export let form;
    export let data;

</script>

<h1>Login</h1>

<form action="?/login" method="POST" use:enhance={() => {
    return async ({ result }) => {
        invalidateAll();

        await applyAction(result);
    };
}}>
    <div>
        <label for="username">Username</label>
        <input type="text" name="username" id="username" required/>
    </div>

    <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" required/>
    </div>

    {#if form?.invalid}
        <div class="error">Invalid username or password</div>
    {/if}

    <button type="submit">Login</button>
</form>

<style></style>

