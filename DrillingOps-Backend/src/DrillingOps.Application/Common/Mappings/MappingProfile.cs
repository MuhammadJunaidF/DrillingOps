using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DrillingOps.Application.Common.Models;
using DrillingOps.Domain.Entities;

namespace DrillingOps.Application.Common.Mappings;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<EventDetails, AddEventDetailDto>().IgnoreAllSourcePropertiesWithAnInaccessibleSetter();
    }
}
