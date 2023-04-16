using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DrillingOps.Application.Common.Models;
using DrillingOps.Application.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PlanningPortal.Application.Common.Wrappers;

namespace DrillingOps.WebApi.Controllers;
[Route("api/[controller]")]
[ApiController]
public class EventController : ControllerBase
{
    private readonly IDrillEventService _eventService;
    public EventController(IDrillEventService eventService)
    {
        _eventService = eventService;
    }

    [HttpGet(nameof(GetEvents))]
    public async Task<EventResponseDto> GetEvents()
    {
        return await _eventService.GetEvents();
    }

    [HttpPost(nameof(AddEventDetail))]
    public async Task<Response<bool>> AddEventDetail(AddEventDetailDto dto)
    {
        return await _eventService.AddEventDetails(dto);
    }

    [HttpPost(nameof(Delete))]
    public async Task<Response<bool>> Delete(long id)
    {
        return await _eventService.Delete(id);
    }

    [HttpGet(nameof(GetChart))]
    public async Task<IEnumerable<BarchartDataDTO>> GetChart()
    {
        return await _eventService.GetChart();
    }
}
