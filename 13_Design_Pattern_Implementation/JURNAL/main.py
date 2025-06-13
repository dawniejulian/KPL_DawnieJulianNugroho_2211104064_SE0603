# Singleton Pattern Implementation in Python

from PusatDataSingleton import PusatDataSingleton

if __name__ == "__main__":
    data1 = PusatDataSingleton.GetDataSingleton()
    data2 = PusatDataSingleton.GetDataSingleton()

    # Tambahkan data pada data1
    data1.AddSebuahData("Nama Anggota 1")
    data1.AddSebuahData("Nama Anggota 2")
    data1.AddSebuahData("Asisten Praktikum")

    # Cetak isi data2 (harus sama dengan data1)
    print("Isi data2 setelah penambahan:")
    data2.PrintSemuaData()

    # Hapus data di data2 (hapus asisten)
    data2.HapusSebuahData(2)

    # Cetak ulang isi data1 (harus mencerminkan perubahan)
    print("Isi data1 setelah penghapusan:")
    data1.PrintSemuaData()

    # Cetak jumlah data
    print(f"Jumlah data di data1: {len(data1.GetSemuaData())}")
    print(f"Jumlah data di data2: {len(data2.GetSemuaData())}")
