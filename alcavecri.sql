-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 09-01-2020 a las 19:35:33
-- Versión del servidor: 10.4.10-MariaDB
-- Versión de PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `alcavecri`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `impuesto`
--

DROP TABLE IF EXISTS `impuesto`;
CREATE TABLE IF NOT EXISTS `impuesto` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `codigo` varchar(4) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `porcentaje` float(5,2) NOT NULL,
  `vigencia` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `impuesto`
--

INSERT INTO `impuesto` (`id`, `codigo`, `descripcion`, `porcentaje`, `vigencia`) VALUES
(1, 'IVA', 'Impuesta IVA', 16.00, '2015-01-01'),
(2, 'ISLR', 'Impuesto ISLR', 5.00, '2015-05-01'),
(3, 'IAE', 'Impuesto IAE', 3.00, '2016-01-01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises`
--

DROP TABLE IF EXISTS `paises`;
CREATE TABLE IF NOT EXISTS `paises` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `codpais` varchar(4) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `paises`
--

INSERT INTO `paises` (`id`, `codpais`, `descripcion`) VALUES
(1, 'VZLA', 'Venezuela'),
(2, 'COLO', 'Colombia'),
(3, 'USA', 'Estados Unidos'),
(4, 'PERU', 'Peru');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
