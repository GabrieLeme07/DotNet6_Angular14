using Microsoft.AspNetCore.Mvc;

namespace ProductWebAPI.Controllers;

[ApiController]
[Route("product")]
public class ProductController : ControllerBase
{
    private readonly ILogger<ProductController> _logger;
    public ProductController(ILogger<ProductController> logger)
        => _logger = logger;


    [HttpGet]
    [Route("list")]
    public IDictionary<int, string> Get()
    {
        IDictionary<int, string> list = new Dictionary<int, string>();
        list.Add(1, "IPhone");
        list.Add(2, "Laptop");
        list.Add(3, "Samsung TV");
        return list;
    }
}