using System;

namespace Modul6
{
    public class SayaTubeVideo
    {
        private int id;
        private string title;
        private int playCount;

        public SayaTubeVideo(string title)
        {
            // Precondition: title tidak null & ≤200 karakter
            if (title == null) throw new ArgumentNullException(nameof(title), "Title tidak boleh null");
            if (title.Length > 200) throw new ArgumentException("Title maksimal 200 karakter", nameof(title));

            this.id = new Random().Next(10000, 100000); // 5 digit
            this.title = title;
            this.playCount = 0;
        }

        public void IncreasePlayCount(int count)
        {
            // Precondition: count ≥0 & ≤25_000_000
            if (count < 0) throw new ArgumentOutOfRangeException(nameof(count), "Count tidak boleh negatif");
            if (count > 25_000_000) throw new ArgumentOutOfRangeException(nameof(count), "Count maksimal 25.000.000");

            // Checked untuk mencegah overflow
            checked
            {
                this.playCount += count;
            }
        }

        public void PrintVideoDetails()
        {
            Console.WriteLine($"ID: {id} | Title: {title} | PlayCount: {playCount}");
        }

        public int GetPlayCount() => playCount;
        public string GetTitle() => title;
    }
}
