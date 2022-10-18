<script>
    import { page } from '$app/stores';
    import '../styles/global.css';
</script>

<nav>
    <ul>
        <li><a href="/">Home</a></li>
        {#if !$page?.data?.user}
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
        {:else}
            <li>
                <form action="/logout" method="post">
                    <button type="submit">Logout</button>
                </form> 
            </li>
        {/if}
        {#if $page?.data?.user?.role === 'Admin'}
            <li><a href="/admin">Admin</a></li>
        {/if}
    </ul>
</nav>
<main>
    <slot />
</main>

<style>
    nav {
        background: #eee;
        padding: 1em;
    }
    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li {
        margin: 0 0.5em;
    }
    a {
        color: #333;
        text-decoration: none;
    }
    a:hover {
        color: #000;
    }

    form {
        display: block;
        width: 45px;
    }

    button {
        background: none;
        border: none;
        color: #333;
        cursor: pointer;
        font: inherit;
        padding: 0;
        text-decoration: underline;
    }
</style>