import unittest
from main import CariTandaBilangan

class TestCariTandaBilangan(unittest.TestCase):
    def test_negatif(self):
        self.assertEqual(CariTandaBilangan(-5), "Negatif")

    def test_positif(self):
        self.assertEqual(CariTandaBilangan(5), "Positif")

    def test_nol(self):
        self.assertEqual(CariTandaBilangan(0), "Nol")

    def test_boundary_negatif(self):
        self.assertEqual(CariTandaBilangan(-1), "Negatif")

    def test_boundary_positif(self):
        self.assertEqual(CariTandaBilangan(1), "Positif")

if __name__ == "__main__":
    unittest.main()
