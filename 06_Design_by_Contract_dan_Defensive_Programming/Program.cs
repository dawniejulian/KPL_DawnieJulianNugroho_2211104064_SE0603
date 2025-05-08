using System;

namespace Modul6
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                // Buat user
                var user = new SayaTubeUser("Review Film oleh Dawnie Julian");

                // Tambah 10 video rekomendasi
                string[] films = {
                    "Review Film Inception oleh Dawnie Julian",
                    "Review Film Interstellar oleh Dawnie Julian",
                    "Review Film The Matrix oleh Dawnie Julian",
                    "Review Film Parasite oleh Dawnie Julian",
                    "Review Film The Godfather oleh Dawnie Julian",
                    "Review Film Spirited Away oleh Dawnie Julian",
                    "Review Film The Dark Knight oleh Dawnie Julian",
                    "Review Film Forrest Gump oleh Dawnie Julian",
                    "Review Film Whiplash oleh Dawnie Julian",
                    "Review Film La La Land oleh Dawnie Julian"
                };

                foreach (var title in films)
                {
                    var video = new SayaTubeVideo(title);
                    video.IncreasePlayCount(100); // contoh play count
                    user.AddVideo(video);
                }

                // Cetak detail setiap video
                Console.WriteLine("=== Detail Video ===");
                foreach (var v in user.GetType().GetField("uploadedVideos",
                    System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance)
                    .GetValue(user) as System.Collections.Generic.List<SayaTubeVideo>)
                {
                    v.PrintVideoDetails();
                }

                // Cetak ringkasan
                Console.WriteLine("\n=== Ringkasan ===");
                Console.WriteLine($"Total play count semua video: {user.GetTotalVideoPlayCount()}");
                user.PrintAllVideoPlaycount();

                // Contoh exception overflow
                Console.WriteLine("\n=== Uji Exception Overflow ===");
                var testVideo = new SayaTubeVideo("Test Overflow");
                // Loop untuk memicu overflow dengan cepat
                for (int i = 0; i < 1000; i++)
                {
                    testVideo.IncreasePlayCount(25_000_000);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[Error] {ex.GetType().Name}: {ex.Message}");
            }
        }
    }
}
