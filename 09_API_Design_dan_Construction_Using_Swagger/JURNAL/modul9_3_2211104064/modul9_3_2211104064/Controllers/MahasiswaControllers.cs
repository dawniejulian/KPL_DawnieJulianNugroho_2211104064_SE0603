using System;
using Microsoft.AspNetCore.Mvc;
using modul9_3_2211104064.Models;

namespace modul9_3_2211104064.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MahasiswaController : ControllerBase
    {
        private static List<Mahasiswa> mahasiswaList = new List<Mahasiswa>
        {
            new Mahasiswa { Name = "Julian", Nim = "2211104064", Course = new List<string>{"PBO", "KPL"}, Year = 2022 },
            new Mahasiswa { Name = "Fathur", Nim = "2211104070", Course = new List<string>{"PBO", "AI"}, Year = 2022 },
            new Mahasiswa { Name = "Samud", Nim = "2211104062", Course = new List<string>{"Web", "Basis Data"}, Year = 2022 }
        };

        [HttpGet]
        public ActionResult<List<Mahasiswa>> GetAll()
        {
            return mahasiswaList;
        }

        [HttpGet("{id}")]
        public ActionResult<Mahasiswa> GetById(int id)
        {
            if (id < 0 || id >= mahasiswaList.Count)
                return NotFound();
            return mahasiswaList[id];
        }

        [HttpPost]
        public ActionResult AddMahasiswa(Mahasiswa mhs)
        {
            mahasiswaList.Add(mhs);
            return Ok();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteMahasiswa(int id)
        {
            if (id < 0 || id >= mahasiswaList.Count)
                return NotFound();
            mahasiswaList.RemoveAt(id);
            return Ok();
        }
    }
}

