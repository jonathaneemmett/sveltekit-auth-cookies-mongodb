<script>
    import '../styles/global.css';
</script>

<nav>
    <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/protected/admin">Admin</a></li>
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
</style>