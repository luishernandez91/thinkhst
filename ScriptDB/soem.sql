-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 18-08-2020 a las 02:43:38
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `soem`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Session`
--

CREATE TABLE `Session` (
  `sid` varchar(100) NOT NULL,
  `expires` datetime NOT NULL,
  `data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Session`
--

INSERT INTO `Session` (`sid`, `expires`, `data`) VALUES
('5PA5MgnwTMVh5fQ8E8JHD8mPzWpv0dmG', '2020-08-19 00:04:05', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":1,\"name\":\"luis\",\"email\":\"luis@mail.com\",\"password\":\"$2a$10$QpMlozEdPU1B24C1MW5WCujIGN9wmj/PmJ9MHfoZNyd3G9vaCIkbu\"}}'),
('8RoAR4OaN_qjKi2eGrA_Q-Np8nPwVN3O', '2020-08-19 00:19:35', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":1,\"name\":\"luis\",\"email\":\"luis@mail.com\",\"password\":\"$2a$10$QpMlozEdPU1B24C1MW5WCujIGN9wmj/PmJ9MHfoZNyd3G9vaCIkbu\"}}'),
('gbIqBiP7vpqCPBoQasZ0HZtw0QQlnLbp', '2020-08-18 21:27:30', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":1,\"name\":\"luis\",\"email\":\"luis@mail.com\",\"password\":\"$2a$10$QpMlozEdPU1B24C1MW5WCujIGN9wmj/PmJ9MHfoZNyd3G9vaCIkbu\"}}'),
('nGenuuAEQcFRacxpiG8bB42i6lSTdsQP', '2020-08-19 00:20:59', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":1,\"name\":\"luis\",\"email\":\"luis@mail.com\",\"password\":\"$2a$10$QpMlozEdPU1B24C1MW5WCujIGN9wmj/PmJ9MHfoZNyd3G9vaCIkbu\"}}'),
('TtBqefL5B6-94jHdmyIanGnvICBeIxIJ', '2020-08-19 00:41:53', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"id\":1,\"name\":\"luis\",\"email\":\"luis@mail.com\",\"password\":\"$2a$10$QpMlozEdPU1B24C1MW5WCujIGN9wmj/PmJ9MHfoZNyd3G9vaCIkbu\"}}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `lastname` varchar(30) DEFAULT NULL,
  `username` varchar(30) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastname`, `username`, `email`, `password`) VALUES
(1, 'luis', 'hernandez', 'luish', 'luis@mail.com', '$2a$10$QpMlozEdPU1B24C1MW5WCujIGN9wmj/PmJ9MHfoZNyd3G9vaCIkbu');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Session`
--
ALTER TABLE `Session`
  ADD PRIMARY KEY (`sid`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
