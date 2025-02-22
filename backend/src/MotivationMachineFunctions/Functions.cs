using Amazon.Lambda.Core;
using Amazon.Lambda.Serialization.SystemTextJson;
using System.Text.Json.Serialization;
using Amazon.Lambda.Annotations;
using Amazon.Lambda.Annotations.APIGateway;
using Amazon.Lambda.APIGatewayEvents;
using MotivationMachineFunctions;

[assembly: LambdaGlobalProperties(GenerateMain = true)]
[assembly: LambdaSerializer(typeof(SourceGeneratorLambdaJsonSerializer<LambdaFunctionJsonSerializerContext>))]

namespace MotivationMachineFunctions;

public class Functions
{
    [LambdaFunction]
    [HttpApi(LambdaHttpMethod.Get, "/hello-world")]
    public string HelloWorld()
    {
        Console.WriteLine("Hello World");
        return "Hello World";
    }
}

[JsonSerializable(typeof(string))]
[JsonSerializable(typeof(APIGatewayHttpApiV2ProxyRequest))]
public partial class LambdaFunctionJsonSerializerContext : JsonSerializerContext
{
}