-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 24-01-2020 a las 19:30:24
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
-- Estructura de tabla para la tabla `estados`
--

DROP TABLE IF EXISTS `estados`;
CREATE TABLE IF NOT EXISTS `estados` (
  `idpais` int(6) NOT NULL,
  `idedo` int(6) NOT NULL AUTO_INCREMENT,
  `codedo` varchar(4) NOT NULL,
  `desedo` varchar(50) NOT NULL,
  PRIMARY KEY (`idedo`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `estados`
--

INSERT INTO `estados` (`idpais`, `idedo`, `codedo`, `desedo`) VALUES
(1, 1, 'CARA', 'Carabobo'),
(1, 5, 'ARA', 'Aragua'),
(1, 9, 'Lara', 'Lara'),
(2, 6, 'BAR', 'Barranquilla'),
(2, 7, 'CUCU', 'Cucuta'),
(2, 8, 'MEDE', 'Medellin'),
(1, 10, 'MERI', 'Merida'),
(1, 11, 'BOLI', 'Bolivar'),
(3, 12, 'FLOR', 'Florida'),
(3, 13, 'NEWY', 'New York'),
(9, 14, 'MOSC', 'Moscú'),
(1, 15, 'COJE', 'Cojedes.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

DROP TABLE IF EXISTS `facturas`;
CREATE TABLE IF NOT EXISTS `facturas` (
  `idfac` int(6) NOT NULL AUTO_INCREMENT,
  `numfac` int(15) NOT NULL,
  `fecfac` date NOT NULL,
  `ctlfac` varchar(10) NOT NULL,
  `riffac` varchar(10) NOT NULL,
  `basfac` float(19,2) NOT NULL,
  `ivafac` float(19,2) NOT NULL,
  `curfac` varchar(6) NOT NULL,
  `idivafac` int(6) NOT NULL,
  `paisfac` int(6) NOT NULL,
  `edofac` int(6) NOT NULL,
  `munfac` int(6) NOT NULL,
  PRIMARY KEY (`idfac`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `facturas`
--

INSERT INTO `facturas` (`idfac`, `numfac`, `fecfac`, `ctlfac`, `riffac`, `basfac`, `ivafac`, `curfac`, `idivafac`, `paisfac`, `edofac`, `munfac`) VALUES
(1, 205010, '2020-01-01', '00-205010', 'V102270564', 1500000.00, 240000.00, '1', 1, 1, 1, 1),
(2, 215122, '2020-01-02', '00-215122', 'V115226688', 2600000.00, 416000.00, '1', 1, 1, 1, 6),
(3, 235266, '2020-01-02', '00-235266', 'V102270564', 1850000.00, 296000.00, '1', 1, 1, 1, 1),
(4, 235411, '2020-01-06', '00-235411', 'V102270564', 3100000.00, 496000.00, '1', 1, 1, 1, 1);

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
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `impuesto`
--

INSERT INTO `impuesto` (`id`, `codigo`, `descripcion`, `porcentaje`, `vigencia`) VALUES
(1, 'IVA', 'Impuesta IVA', 16.00, '2016-01-01'),
(2, 'ISLR', 'Impuesto ISLR', 5.00, '2016-01-01'),
(3, 'IAE', 'Impuesto IAE', 3.00, '2017-01-01'),
(5, 'LUJ', 'Lujo', 200.00, '2020-01-01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `monedas`
--

DROP TABLE IF EXISTS `monedas`;
CREATE TABLE IF NOT EXISTS `monedas` (
  `idmon` int(6) NOT NULL AUTO_INCREMENT,
  `codmon` varchar(4) NOT NULL,
  `desmon` varchar(50) NOT NULL,
  PRIMARY KEY (`idmon`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `monedas`
--

INSERT INTO `monedas` (`idmon`, `codmon`, `desmon`) VALUES
(1, 'Bs.', 'Bolívares'),
(2, 'USD', 'Dolar'),
(3, 'PECO', 'Pesos Colombianos'),
(4, 'EUR', 'Euro'),
(5, 'RUBL', 'Rublos'),
(6, 'LIBR', 'Libra Esterlina'),
(7, 'PETR', 'Petros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipios`
--

DROP TABLE IF EXISTS `municipios`;
CREATE TABLE IF NOT EXISTS `municipios` (
  `idpais` int(6) NOT NULL,
  `idedo` int(6) NOT NULL,
  `idmun` int(6) NOT NULL AUTO_INCREMENT,
  `codmun` varchar(4) NOT NULL,
  `desmun` varchar(50) NOT NULL,
  PRIMARY KEY (`idmun`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `municipios`
--

INSERT INTO `municipios` (`idpais`, `idedo`, `idmun`, `codmun`, `desmun`) VALUES
(1, 1, 1, 'VALE', 'Valencia'),
(1, 1, 4, 'LIBE', 'Libertador'),
(1, 1, 5, 'BEJU', 'Bejuma'),
(1, 1, 6, 'SDGO', 'San Diego'),
(1, 5, 8, 'LIM', 'Limón'),
(1, 5, 9, 'MBI', 'Mario Briceño Iragorri'),
(2, 6, 10, 'ANTI', 'Antioquia'),
(1, 9, 11, 'CABU', 'Cabudare'),
(1, 10, 12, 'SANA', 'San Antonio'),
(1, 11, 13, 'GUA', 'Guasipati'),
(1, 11, 14, 'CARO', 'Caroni'),
(9, 14, 15, 'XYAH', 'Xyan'),
(1, 1, 17, 'GUI', 'Guigue');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises`
--

DROP TABLE IF EXISTS `paises`;
CREATE TABLE IF NOT EXISTS `paises` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `codpais` varchar(4) NOT NULL,
  `despais` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `paises`
--

INSERT INTO `paises` (`id`, `codpais`, `despais`) VALUES
(1, 'VZLA', 'Venezuela'),
(6, 'SLV', 'El Salvador'),
(7, 'CRC', 'Costa Rica');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

DROP TABLE IF EXISTS `proveedores`;
CREATE TABLE IF NOT EXISTS `proveedores` (
  `idpro` int(6) NOT NULL AUTO_INCREMENT,
  `rifpro` varchar(10) NOT NULL,
  `nompro` varchar(100) NOT NULL,
  `dirpro` varchar(100) NOT NULL,
  `mailpro` varchar(50) NOT NULL,
  `paispro` int(6) NOT NULL,
  `estpro` int(6) NOT NULL,
  `munpro` int(6) NOT NULL,
  PRIMARY KEY (`idpro`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `proveedores`
--

INSERT INTO `proveedores` (`idpro`, `rifpro`, `nompro`, `dirpro`, `mailpro`, `paispro`, `estpro`, `munpro`) VALUES
(1, 'V102270564', 'JIH CONSULTORES', 'Los Caobos', 'jano1408@gmail.com', 1, 1, 1),
(3, 'V115226688', 'Y&L Inversiones', '19 de Abril', 'yasminleon668@gmail.com', 1, 1, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
