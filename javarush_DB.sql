DROP DATABASE IF EXISTS test;
CREATE SCHEMA `test` DEFAULT CHARACTER SET utf8;

CREATE TABLE `test`.`parts` (
`ID` INT(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,
`NAME` VARCHAR(25) NOT NULL,
`NECESSITY` BIT(1) NOT NULL DEFAULT false,
`QUANTITY` INT(11));

INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("Power supply", 1, 5);
INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("CPU", 1, 12);
INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("Motherboard", 1, 4);
INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("Video card ex", 0, 14);
INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("Video card inner", 1, 4);

INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("Fans", 1, 24);
INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("Water cooling", 0, 34);
INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("HDD", 1, 22);
INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("SSD", 0, 31);
INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("Sound card", 0, 41);

INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("Speakers", 0, 14);
INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("Monitor", 1, 12);
INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("Keyboard", 1, 2);
INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("Mouse", 1, 35);
INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("Wi-Fi", 0, 52);

INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("Network card", 1, 11);
INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("Usb card", 1, 19);
INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("Operating system software", 1, 25);
INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("Modem", 0, 36);
INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("Webcam", 0, 42);

INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("Operative memory", 1, 21);
INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("Computer case", 1, 3);
INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("External hdd", 0, 25);
INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("Audio system", 0, 1);
INSERT INTO `test`.`parts` (`NAME`, `NECESSITY`, `QUANTITY`) values ("Javarush", 0, 1);

