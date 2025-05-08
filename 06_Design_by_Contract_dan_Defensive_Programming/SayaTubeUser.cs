using System;
using System.Collections.Generic;

namespace Modul6
{
    public class SayaTubeUser
    {
        private int id;
        private string username;
        private List<SayaTubeVideo> uploadedVideos;

        public SayaTubeUser(string username)
        {
            // Precondition: username tidak null & ≤100 karakter
            if (username == null) throw new ArgumentNullException(nameof(username), "Username tidak boleh null");
            if (username.Length > 100) throw new ArgumentException("Username maksimal 100 karakter", nameof(username));

            this.id = new Random().Next(10000, 100000);
            this.username = username;
            this.uploadedVideos = new List<SayaTubeVideo>();
        }

        public void AddVideo(SayaTubeVideo video)
        {
            // Precondition: video tidak null & playCount < int.MaxValue
            if (video == null) throw new ArgumentNullException(nameof(video), "Video tidak boleh null");
            if (video.GetPlayCount() >= int.MaxValue) 
                throw new InvalidOperationException("PlayCount video sudah mencapai batas maksimum");

            uploadedVideos.Add(video);
        }

        public int GetTotalVideoPlayCount()
        {
            int total = 0;
            foreach (var v in uploadedVideos)
            {
                checked { total += v.GetPlayCount(); }
            }
            return total;
        }

        public void PrintAllVideoPlaycount()
        {
            Console.WriteLine($"User: {username}");
            int maxPrint = Math.Min(uploadedVideos.Count, 8); // Postcondition: maksimal 8
            for (int i = 0; i < maxPrint; i++)
            {
                Console.WriteLine($"Video {i+1} judul: {uploadedVideos[i].GetTitle()}");
            }
        }
    }
}
