import React, { useEffect, useState } from "react"
import axios from "axios"
import { title } from "process"
import { useRouter } from "next/router"
import ResultItem from "@/components/ResultItem"
import { Container, Grid, GridItem, Text } from "@chakra-ui/layout"
interface ResultItemProps {
    id: string
    title: string
    company: string
    address: string

    location: string
    salaryLow: string
    salaryHigh: string
    logo: string
    type: string
    description: string
}
function Results() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const [searchTerm, setSearchTerm] = useState("")
    const [results, setResults] = useState([])
    const { title } = router.query

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const response = await axios.get(
                "https://server.hsc.geethg.com/jobs/"
            )

            setResults(response.data)
            setLoading(false)
        }
        fetchData()
    }, [title])

    return (
        <Container maxW="container.xl">
            <Text fontSize="2xl" fontWeight="bold" mt="10">
                Results for {title}
            </Text>
            <Grid
                gridTemplateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                }}
                gap={6}
            >
                {results.map((result: ResultItemProps) => (
                    <GridItem key={result.id}>
                        <ResultItem
                            id={result?.id}
                            title={result?.title}
                            company={result?.company}
                            address={result?.address}
                            location={result?.location}
                            salaryLow={result?.salaryLow}
                            salaryHigh={result?.salaryHigh}
                            logo={result?.logo}
                            type={result?.type}
                            description={result?.description}
                        />
                    </GridItem>
                ))}
            </Grid>
        </Container>
    )
}

export default Results
