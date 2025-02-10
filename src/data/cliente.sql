-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 10, 2025 at 02:34 AM
-- Server version: 8.4.3
-- PHP Version: 8.3.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `negocio_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `cliente`
--

CREATE TABLE `cliente` (
  `id` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `nombre_comercial` varchar(100) DEFAULT NULL,
  `rif` varchar(20) NOT NULL,
  `direccion_fiscal` text NOT NULL,
  `pais` varchar(50) NOT NULL DEFAULT 'Venezuela',
  `estado_id` int DEFAULT NULL,
  `unidad_negocio_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cliente`
--

INSERT INTO `cliente` (`id`, `nombre`, `nombre_comercial`, `rif`, `direccion_fiscal`, `pais`, `estado_id`, `unidad_negocio_id`) VALUES
(1, 'Constructora Los Andes', 'CLA C.A.', 'J-12345678-9', 'Av. Libertador, Edif. CLA, Piso 1', 'Venezuela', 14, 1),
(2, 'Asfaltos del Centro', 'AsfalCentro', 'J-23456789-0', 'Calle Bolívar, Galpón 45', 'Venezuela', 7, 1),
(3, 'Cementera Oriente', 'CemOriente', 'J-34567890-1', 'Zona Industrial, Av. Sucre', 'Venezuela', 16, 2),
(4, 'Construcciones Lara', 'Construlara', 'J-45678901-2', 'Urbanización El Sol, Torre A', 'Venezuela', 13, 1),
(5, 'Asfaltos Mérida', 'AsfalMérida', 'J-56789012-3', 'Carretera Panamericana, Km 5', 'Venezuela', 14, 1),
(7, 'Inversiones del Sur', 'InvSur', 'J-78901234-5', 'Av. Urdaneta, Centro Comercial', 'Venezuela', 3, 2),
(8, 'Obras y Vialidad', 'ObraVial', 'J-89012345-6', 'Carretera Nacional, Galpón 10', 'Venezuela', 8, 1),
(10, 'Asfaltos Guayana', 'AsfalGuayana', 'J-01234567-8', 'Zona Industrial Matanzas', 'Venezuela', 6, 1),
(34, 'Carlos Pérez', 'Carlos S.A.', 'J-12345678-3', 'Avenida Principal, Caracas, Venezuela', 'Venezuela', 4, 1),
(35, 'Carlos Pérez', 'Carlos S.A.', 'J-12345678-1', 'Avenida Principal, Caracas, Venezuela', 'Venezuela', 4, 1),
(36, 'hfsajd', 'djfhlasjfh', 'rif', 'direccionFiscal', 'pais', 2, 1),
(38, 'richarson', 'algo', '371203810', 'guacara', 'venezuela', 10, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `rif` (`rif`),
  ADD KEY `estado_id` (`estado_id`),
  ADD KEY `unidad_negocio_id` (`unidad_negocio_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `cliente_ibfk_1` FOREIGN KEY (`estado_id`) REFERENCES `estados_venezuela` (`id`),
  ADD CONSTRAINT `cliente_ibfk_2` FOREIGN KEY (`unidad_negocio_id`) REFERENCES `unidad_negocio` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
