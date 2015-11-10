<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp1');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'h|#!h=Yo:{(H^?yQkE{1-;~PFew.,A|=zG#k3XE*>5Tx.=R+Q@-3+I{NZP^-hS6B');
define('SECURE_AUTH_KEY',  '%7HkL42Hy+o8CzN@lG5xQZR}qU{F&GFrZWn<SNLigJCvx-9Puig#Gz$-Fl:CukL5');
define('LOGGED_IN_KEY',    'BZ@vsEg,(G/eRF|p|92JH2@ThNv6|E%?r~m.E|S%{>J+=i-_meU2yEw`DoE]lfED');
define('NONCE_KEY',        'z0D!4Gn|BX<gbKC/T-T`su_Q?<n/E1T;/s<GWeeYmQH-Yr=bcxSfd%P$?iF*B$%;');
define('AUTH_SALT',        '.H|0Hj+>saFo|Ti<|GT(u%@>/bY,<{RPaX1I)I;7 uoZ%(1B+xWzF]wnZfI2+Qg4');
define('SECURE_AUTH_SALT', ']A7_?<L32Db]eTvWA-V.GH2x_J*wdCSmGRs;-ir*, z[:0~aq_q0grt|P9?RyTl`');
define('LOGGED_IN_SALT',   'LFUTb }fc0bk|y54rabc#P-/^%Xl5d6?R)bGp,64H#]1#!MVhn+Qnh_M%10|(p:s');
define('NONCE_SALT',       'J#;$@,A ~I>tO <nMI-+C4Xj3+I~UJSHCN<t#~)BZC6KYg+Hl%zL#,Zdfv9,oYnz');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
