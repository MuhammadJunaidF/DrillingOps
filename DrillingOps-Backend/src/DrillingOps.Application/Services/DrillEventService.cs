using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DrillingOps.Application.Common.Models;
using DrillingOps.Application.Repositories;
using DrillingOps.Application.Services.Interfaces;
using DrillingOps.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using PlanningPortal.Application.Common.Wrappers;

namespace DrillingOps.Application.Services;

public class DrillEventService : IDrillEventService
{
    private readonly IDrillEventRepositoryAsync _drillEventRepositoryAsync;
    private readonly IMapper _mapper;

    public DrillEventService(IDrillEventRepositoryAsync drillEventRepositoryAsync, IMapper mapper)
    {
        _drillEventRepositoryAsync = drillEventRepositoryAsync;
        _mapper = mapper;
    }

    public async Task<Response<bool>> AddEventDetails(AddEventDetailDto dto)
    {
        var response = new Response<bool>();
        try
        {
            if(dto.Id == 0)
            {
                var eventDetail = new EventDetails()
                {
                    Start = dto.Start,
                    End = dto.End,
                    EventId = dto.EventId
                };

                await _drillEventRepositoryAsync.AddAsync(eventDetail);
                response.Success = true;
            }
            else
            {
                var eventDetails = await _drillEventRepositoryAsync.GetByIdAsync(dto.Id);
                eventDetails.Start = dto.Start;
                eventDetails.End = dto.End;
                eventDetails.LastModified = DateTime.UtcNow;
                eventDetails.EventId = dto.EventId;

                await _drillEventRepositoryAsync.UpdateAsync(eventDetails);

                response.Success = true;
            }


            if (response.Success == true)
            {
                return new Response<bool>(true, "Event details added successfully");
            }
            else
            {
                return new Response<bool>(false, "Someting went wrong");
            }
        }
        catch (Exception ex)
        {
            var res = new Response<bool>(false, ex.Message);
            return res;
        }
      
    }

    public async Task<Response<bool>> Delete(long id)
    {
        var response = new Response<bool>();

        var eventDetails = await _drillEventRepositoryAsync.GetByIdAsync(id);
        if (eventDetails != null)
        {
            eventDetails.IsDeleted = true;
            eventDetails.LastModified = DateTime.UtcNow;

            await _drillEventRepositoryAsync.UpdateAsync(eventDetails);

            response.Success = true;
        }
        else
        {
            response.Success = false;
        }
        return response;
    }

    public async Task<EventResponseDto> GetEvents()
    {
        var totalEvents = await _drillEventRepositoryAsync.GetAllQueryable().Include(x => x.Event)
            .Where(x => x.IsDeleted == false)
            .Select(x => new EventDto()
            {
                Id = x.Id,
                Start = x.Start,
                End = x.End,
                EventName = x.Event.Name,
                EventId = x.EventId
            }).ToListAsync();

        var totalCount = totalEvents.Count();

        return totalEvents.Any()
          ? new EventResponseDto
          {
              Items = totalEvents,
              TotalCount = totalCount,
              Successful = true,
              Message = "Records Found"
          }
          : new EventResponseDto
          {
              Items = totalEvents,
              TotalCount = totalCount,
              Successful = false,
              Message = "No Record Found"
          };
    }

    public async Task<IEnumerable<BarchartDataDTO>> GetChart()
    {

        var response = await
            _drillEventRepositoryAsync.GetAllQueryable().Include(x => x.Event)
            .Where(x => x.IsDeleted == false).Select(e => new BarchartDataDTO
            {
                Label = e.Event.Name,
                Stack = "a",
                Data = new List<long>() { e.End },
                BackgroundColor = new List<string>() { e.Event.Color == null ? "" : e.Event.Color }

            }).ToListAsync();

        return response;

    }
}
