-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: user_info
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `accountType` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `memberSince` date NOT NULL,
  `lastLogin` datetime NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Vamshi Panjala','vamshi@gmail.com','Vamshi@123','+91-9876543210','Premium','Hyderabad, Telangana, India','2023-07-15','2025-03-24 10:45:00','Active'),(2,'Rohit Kumar','rohitk@gmail.com','Rohit@456','+91-9999999999','Standard','Bangalore, Karnataka, India','2024-01-10','2025-03-25 09:00:00','Active'),(3,'Anjali Mehta','anjali@gmail.com','Anjali@789','+91-8888888888','Premium','Mumbai, Maharashtra, India','2022-12-01','2025-03-20 14:15:00','Active'),(4,'John Doe','john.doe@gmail.com','John@123','+91-9876543211','Standard','New York, USA','2024-03-01','2025-03-29 11:00:00','Active'),(5,'Emma Watson','emma.watson@gmail.com','Emma@123','+91-8888888889','Premium','London, UK','2023-08-15','2025-03-29 12:00:00','Active'),(6,'Sophia Loren','sophia.loren@gmail.com','Sophia@123','+91-7777777777','Standard','Rome, Italy','2022-09-20','2025-03-28 17:30:00','Active'),(7,'Daniel Craig','daniel.craig@gmail.com','Daniel@123','+91-6666666666','Premium','Los Angeles, USA','2021-06-05','2025-03-29 09:45:00','Active');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-01 17:47:15
