using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DrillingOps.Application.Common.Models;
using DrillingOps.Application.Repositories;
using PlanningPortal.Application.Common.Wrappers;

namespace DrillingOps.Application.Services.Interfaces;

public interface IDrillEventService
{
    Task<Response<bool>> AddEventDetails(AddEventDetailDto dto);
    Task<EventResponseDto> GetEvents();
    Task<Response<bool>> Delete(long id);
    Task<IEnumerable<BarchartDataDTO>> GetChart();
}
