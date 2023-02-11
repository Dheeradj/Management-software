-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: projectdb
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `klant`
--

DROP TABLE IF EXISTS `klant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `klant` (
  `id` int NOT NULL AUTO_INCREMENT,
  `voornaam` varchar(250) DEFAULT NULL,
  `achternaam` varchar(250) DEFAULT NULL,
  `geslacht` varchar(20) DEFAULT NULL,
  `adressennummer` varchar(250) DEFAULT NULL,
  `district` varchar(250) DEFAULT NULL,
  `telefoonnummer` varchar(250) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `klant`
--

LOCK TABLES `klant` WRITE;
/*!40000 ALTER TABLE `klant` DISABLE KEYS */;
INSERT INTO `klant` VALUES (2,'Jaanvi','Arorra','vrouw','Garnizoenspad 15','Paramaribo','8568877','jaanvi@gmail.com','true'),(6,'Sharmil','Kasi','Vrouw','Agamemnonweg 14','Wanica','8947923489','kasisharm@gmail.com','true'),(7,'Test1','Test','man','fjh141','wnaidh','3472892362','test@gmail.com','true');
/*!40000 ALTER TABLE `klant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leverancier`
--

DROP TABLE IF EXISTS `leverancier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leverancier` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bedrijfsnaam` varchar(250) DEFAULT NULL,
  `adress` varchar(250) DEFAULT NULL,
  `district` varchar(250) DEFAULT NULL,
  `directeur` varchar(250) DEFAULT NULL,
  `telefoonnummer` varchar(250) DEFAULT NULL,
  `website` varchar(250) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leverancier`
--

LOCK TABLES `leverancier` WRITE;
/*!40000 ALTER TABLE `leverancier` DISABLE KEYS */;
INSERT INTO `leverancier` VALUES (3,'Testing2','Tourtonnelaan','Wanica','Dheeradj','328664','www.werkenbijalembo.sr','true'),(4,'Testing2','Tourtonnelaan','Wanica','Dheeradj','328664','www.werkenbijalembo.sr','true'),(5,'Alemboo','Tourtonnelaan','Wanica','Dheeradj','3286641364','www.werkenbijalembo.sr','false');
/*!40000 ALTER TABLE `leverancier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `naam` varchar(250) DEFAULT NULL,
  `telefoonnummer` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','9610749','admin@gmail.com','123','true','admin'),(2,'Dheeradj','8790396','dheeradj.hardwarsing@gmail.com','123456','true','user'),(3,'Yogesh','87304862','yo@gmail.com','123456','true','user'),(4,'Dheeradj','8649977','dheeradj@mailinator.com','12345','true','user'),(5,'Jahanvi','708958930','sjfh@gmail.com','fjh','true','user'),(6,'Dheradj','7087817893','test@gmail.com','ASFD','false','user'),(7,'Jahanvi','7888364521','jahanvi@gmail.com','dkshgf7','false','user'),(8,'Yogesh ','7940287482','yhardwarsing@gmail.com','igkljdnfslkjh','false','user'),(9,'john','6583929493','john@gmail.com','john','false','user');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-02 21:41:44
