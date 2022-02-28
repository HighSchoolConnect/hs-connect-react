 <VStack spacing={-5}>
                <TextH1>{users.displayName}</TextH1>
                <HStack>
                  <TextP>Email: {users.email}</TextP>
                  <TextP>Phone: 214-214-2142</TextP>
                </HStack>
                <HStack>
                  <TextP>Current Position: Cool Kid</TextP>
                  <TextP>Location: Austin, TX</TextP>
                </HStack>
              </VStack>
            </HStack>
            <HStack>
              <TextH3 align="left">Experience</TextH3>
              <TextP>Click Positions for More Info</TextP>
            </HStack>
            <HStack spacing={10}>
              <VStack>
                <HStack>
                  <Popover>
                    <PopoverTrigger>
                      <TextH4>Software Engineer</TextH4>
                    </PopoverTrigger>
                    <PopoverContent zIndex={1}>
                      <PopoverHeader>Software Engineer</PopoverHeader>
                      <PopoverBody>
                        <VStack>
                          <Text>Location: Microsoft</Text>
                          <Text>Date: January 2010 - February 2015</Text>
                        </VStack>
                      </PopoverBody>
                      <PopoverFooter>
                        <PopoverCloseButton />
                      </PopoverFooter>
                    </PopoverContent>
                  </Popover>
                  <Divider orientation="horizontal" borderWidth={2}></Divider>
                  <Popover>
                    <PopoverTrigger>
                      <TextH4>Full Stack Developer</TextH4>
                    </PopoverTrigger>
                    <PopoverContent zIndex={1}>
                      <PopoverHeader>Full Stack Developer</PopoverHeader>
                      <PopoverBody>
                        <VStack>
                          <Text>Location: Samsung</Text>
                          <Text>Date: February 2015 - March 2017</Text>
                        </VStack>
                      </PopoverBody>
                      <PopoverFooter>
                        <PopoverCloseButton />
                      </PopoverFooter>
                    </PopoverContent>
                  </Popover>
                  <Divider orientation="horizontal" borderWidth={2}></Divider>
                  <Popover>
                    <PopoverTrigger>
                      <TextH4>Data Analyst</TextH4>
                    </PopoverTrigger>
                    <PopoverContent zIndex={1}>
                      <PopoverHeader>Data Analyst</PopoverHeader>
                      <PopoverBody>
                        <VStack>
                          <Text>Location: Google</Text>
                          <Text>Date: March 2017 - Present</Text>
                        </VStack>
                      </PopoverBody>
                      <PopoverFooter>
                        <PopoverCloseButton />
                      </PopoverFooter>
                    </PopoverContent>
                  </Popover>
                </HStack>
              </VStack>
            </HStack>
            <HStack>
              <TextH3 align="left">Education</TextH3>
              <TextP>Click School for More Info</TextP>
            </HStack>
            <HStack spacing={10}>
              <VStack>
                <HStack spacing={200}>
                  <Popover>
                    <PopoverTrigger>
                      <TextH4>Coppell High School</TextH4>
                    </PopoverTrigger>
                    <PopoverContent zIndex={1}>
                      <PopoverHeader>Coppell High School</PopoverHeader>
                      <PopoverBody>
                        <VStack>
                          <Text>Location: Coppell, TX</Text>
                          <Text>Degree Earned: High School Diploma</Text>
                          <Text>Graduation Date: May 2006</Text>
                        </VStack>
                      </PopoverBody>
                      <PopoverFooter>
                        <PopoverCloseButton />
                      </PopoverFooter>
                    </PopoverContent>
                  </Popover>
                  <Divider orientation="horizontal" borderWidth={2}></Divider>
                  <Popover>
                    <PopoverTrigger>
                      <TextH4>MIT</TextH4>
                    </PopoverTrigger>
                    <PopoverContent zIndex={1}>
                      <PopoverHeader>MIT</PopoverHeader>
                      <PopoverBody>
                        <VStack>
                          <Text>Location: Cambridge, Massachussetts</Text>
                          <Text>Degree Earned: BS Computer Science</Text>
                          <Text>Graduation Date: May 2010</Text>
                        </VStack>
                      </PopoverBody>
                      <PopoverFooter>
                        <PopoverCloseButton />
                      </PopoverFooter>
                    </PopoverContent>
                  </Popover>
                </HStack>
              </VStack>
            </HStack>
          </VStack>
   