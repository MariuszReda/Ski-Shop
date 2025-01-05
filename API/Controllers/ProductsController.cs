using API.Data;
using API.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    public class ProductsController : ApiBaseController
    {
        private readonly ILogger<ProductsController> _logger;
        private readonly StoreContext _dbcontext;
        public ProductsController(StoreContext context, ILogger<ProductsController> logger)
        {
            this._dbcontext = context;
            _logger = logger;

        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            var products = await _dbcontext.Products.ToListAsync();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            return await _dbcontext.Products.FindAsync(id);
        }
    }
}