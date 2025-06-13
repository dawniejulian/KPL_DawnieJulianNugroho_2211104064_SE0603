import tkinter as tk

def CariTandaBilangan(a):
    if a < 0:
        return "Negatif"
    elif a > 0:
        return "Positif"
    else:
        return "Nol"

def on_button_click():
    try:
        angka = int(entry.get())
        hasil = CariTandaBilangan(angka)
        output_label.config(text=hasil)
    except ValueError:
        output_label.config(text="Input tidak valid!")

root = tk.Tk()
root.title("TP Modul 12 - 2211104064")

entry = tk.Entry(root)
entry.pack()

button = tk.Button(root, text="Cek Tanda Bilangan", command=on_button_click)
button.pack()

output_label = tk.Label(root, text="")
output_label.pack()

root.mainloop()
